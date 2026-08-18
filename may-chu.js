// May chu tinh cho app NGUOI QUE (ban chay tai may).
// Chay tren http://localhost de trinh duyet cho phep luu IndexedDB va localStorage.
//
//   node may-chu.js            -> cong 3020, tu mo trinh duyet
//   node may-chu.js 3021       -> doi cong
//   node may-chu.js --khong-mo -> khong tu mo trinh duyet

const http = require('http');
const fs = require('fs');
const path = require('path');

const CONG = Number(process.argv.find(a => /^\d+$/.test(a))) || 3020;
const GOC = __dirname;

const KIEU = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let duong = decodeURIComponent(req.url.split('?')[0]);
  if (duong === '/') duong = '/index.html';

  const tep = path.join(GOC, path.normalize(duong).replace(/^([.][.][/\\])+/, ''));
  if (!tep.startsWith(GOC)) { res.writeHead(403).end('Cam'); return; }

  fs.readFile(tep, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Khong tim thay: ' + duong);
      return;
    }
    res.writeHead(200, { 'Content-Type': KIEU[path.extname(tep).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

server.on('error', e => {
  console.log('');
  if (e.code === 'EADDRINUSE') {
    console.log('  Cong ' + CONG + ' dang bi chuong trinh khac chiem.');
    console.log('  Cach 1: dong cua so den dang chay NGUOI QUE truoc do roi chay lai.');
    console.log('  Cach 2: dung cong khac:   node may-chu.js 3021');
  } else {
    console.log('  Loi: ' + e.message);
  }
  console.log('');
  process.exit(1);
});

// Mo trinh duyet SAU khi may chu san sang, tranh loi "khong ket noi duoc" o lan tai dau.
server.listen(CONG, () => {
  const dia = 'http://localhost:' + CONG;
  console.log('');
  console.log('  NGUOI QUE dang chay tai:  ' + dia);
  console.log('  Bam Ctrl+C de tat.');
  console.log('');
  if (!process.argv.includes('--khong-mo')) {
    require('child_process').exec('start "" "' + dia + '"');
  }
});
