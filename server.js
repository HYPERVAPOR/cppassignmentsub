// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// 设置文件存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // 获取作业类型和作业次数
        const assignmentType = req.body['assignment-type'];
        const assignmentNumber = req.body['assignment-number'];

        // 构建上传目录
        const uploadDir = path.join(__dirname, 'uploads',  `${assignmentType} ${assignmentNumber}`);

        // 创建目录（如果不存在）
        fs.mkdirSync(uploadDir, { recursive: true });

        // 设置上传目录
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        // 从请求体中获取相关信息
        const assignmentType = req.body['assignment-type'];
        const assignmentNumber = req.body['assignment-number'];
        const studentId = req.body['student-id'];
        const name = req.body['name'];

        // 生成文件名
        const newFileName = `${assignmentType} ${assignmentNumber} ${studentId} ${name}${path.extname(file.originalname)}`;
        cb(null, newFileName); // 使用自定义文件名
    }
});

const uploads = multer({ storage });

app.get('/', (req, res) => {
    res.send('欢迎来到我的服务器！'); // 自定义返回的内容
});

// 创建上传路由
app.post('/uploads', uploads.single('file-upload'), (req, res) => {
    res.send('文件上传成功！');
});

//创建检查路由
app.post('/check-status', (req, res) => {
    const { studentId } = req.body; // 只获取学号

    const uploadsDir = path.join(__dirname, 'uploads'); 
    fs.readdir(uploadsDir, (err, assignmentTypes) => {
        if (err) {
            return res.status(500).json({ message: '服务器错误' });
        }

        let filesFound = [];

        // 创建一个 Promise 数组用于处理异步读取
        const promises = assignmentTypes.map(assignmentType => {
            return new Promise((resolve, reject) => {
                const assignmentDir = path.join(uploadsDir, assignmentType);
                fs.readdir(assignmentDir, (err, files) => {
                    if (err) {
                        return reject(err);
                    }

                    // 过滤出包含学号的文件
                    const matchingFiles = files.filter(file => file.includes(studentId));
                    filesFound.push(...matchingFiles);
                    resolve();
                });
            });
        });

        // 等待所有 Promise 完成
        Promise.all(promises)
            .then(() => {
                if (filesFound.length > 0) {
                    res.json({ files: filesFound });
                } else {
                    res.json({ message: '未找到任何提交文件' });
                }
            })
            .catch(err => {
                res.status(500).json({ message: '服务器错误' });
            });
    });
});

// 启动服务器
app.listen(PORT,'0.0.0.0', () => {
    console.log(`服务器正在运行，访问：http://localhost:${PORT}`);
});
