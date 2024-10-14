// script.js
const roster = [
    { name: '刘哲宁', studentId: '2024212208' },
    { name: '靖力', studentId: '2021111636' },
    { name: '张易麟', studentId: '2022113152' },
    { name: '何棠', studentId: '2024112960' },
    { name: '蔡俊杰', studentId: '2024112961' },
    { name: '王怡灵', studentId: '2024112962' },
    { name: '覃小雪', studentId: '2024112963' },
    { name: '陈映江', studentId: '2024112964' },
    { name: '吴煜', studentId: '2024112965' },
    { name: '颜杉芳', studentId: '2024112966' },
    { name: '邵鹏飞', studentId: '2024112967' },
    { name: '程正熙', studentId: '2024112968' },
    { name: '段佳贝', studentId: '2024112969' },
    { name: '杨玉轩', studentId: '2024112970' },
    { name: '刘宇恒', studentId: '2024112971' },
    { name: '刘欢', studentId: '2024112972' },
    { name: '孙齐', studentId: '2024112973' },
    { name: '杜洋', studentId: '2024112974' },
    { name: '武昌豪', studentId: '2024112975' },
    { name: '张兰', studentId: '2024112976' },
    { name: '张锦鹏', studentId: '2024112977' },
    { name: '肖淞友', studentId: '2024112978' },
    { name: '黄超', studentId: '2024112979' },
    { name: '张鑫雅', studentId: '2024112980' },
    { name: '刘宝林', studentId: '2024112981' },
    { name: '邬雨晴', studentId: '2024112982' },
    { name: '王瑞祺', studentId: '2024112983' },
    { name: '次仁多布拉', studentId: '2024112984' },
    { name: '曹鑫海', studentId: '2024112985' },
    { name: '施大聪', studentId: '2024112986' },
    { name: '晏美康', studentId: '2024112987' },
    { name: '朱泽东', studentId: '2024112988' },
    { name: '项海锐', studentId: '2024112989' },
    { name: '朱俊辉', studentId: '2024112990' },
    { name: '赵世锦', studentId: '2024112991' },
    { name: '李菁璇', studentId: '2024112992' },
    { name: '肖昌萍', studentId: '2024112993' },
    { name: '刘岷威', studentId: '2024112994' },
    { name: '李昌昊', studentId: '2024112995' },
    { name: '吴凡凡', studentId: '2024112996' },
    { name: '彭颂涵', studentId: '2024112997' },
    { name: '姜芊慧', studentId: '2024112998' },
    { name: '田洺岩', studentId: '2024112999' },
    { name: '张康佳', studentId: '2024113000' },
    { name: '夏敏耀', studentId: '2024113001' },
    { name: '管怡程', studentId: '2024113002' },
    { name: '武祥', studentId: '2024113003' },
    { name: '寇傲雪', studentId: '2024113004' },
    { name: '赵匀佑', studentId: '2024113005' },
    { name: '刘思怡', studentId: '2024113006' },
    { name: '赵春旭', studentId: '2024113007' },
    { name: '兰炀', studentId: '2024113008' },
    { name: '苟浙棋', studentId: '2024113009' },
    { name: '罗兵田', studentId: '2024113010' },
    { name: '梁亦嘉', studentId: '2024113011' },
    { name: '童俊杰', studentId: '2024113012' },
    { name: '博尔江·木拉提汗', studentId: '2024113013' },
    { name: '杨晋豪', studentId: '2024113014' },
    { name: '赵一帆', studentId: '2024113015' },
    { name: '张亚豪', studentId: '2024113016' },
    { name: '钟科', studentId: '2024113017' },
    { name: '张佑琪', studentId: '2024113254' },
    { name: '周龙雨', studentId: '2024113255' },
    { name: '周子诚', studentId: '2024113256' },
    { name: '吕琦', studentId: '2024113257' },
    { name: '黄学毅', studentId: '2024113258' },
    { name: '薛大煜', studentId: '2024113259' },
    { name: '张昊昱', studentId: '2024113260' },
    { name: '逯慧泽', studentId: '2024113261' },
    { name: '牛思博', studentId: '2024113262' },
    { name: '蔡紫忻', studentId: '2024113263' },
    { name: '闫思远', studentId: '2024113264' },
    { name: '董嘉昱', studentId: '2024113265' },
    { name: '张帅', studentId: '2024113266' },
    { name: '田丰', studentId: '2024113267' },
    { name: '张希睿', studentId: '2024113269' },
    { name: '张乐萱', studentId: '2024113270' },
    { name: '房郅霖', studentId: '2024113271' },
    { name: '向锦', studentId: '2024113272' },
    { name: '张佳敏', studentId: '2024113273' },
    { name: '李小双', studentId: '2024113274' },
    { name: '丁旭阳', studentId: '2024113275' },
    { name: '陶安琪', studentId: '2024113276' },
    { name: '陈宇涵', studentId: '2024113277' },
    { name: '杜宇轩', studentId: '2024113278' },
    { name: '刘文轩', studentId: '2024113279' },
    { name: '杨沁鑫', studentId: '2024113280' },
    { name: '陈伟翔', studentId: '2024113281' },
    { name: '何祎祺', studentId: '2024113282' },
    { name: '廖振宇', studentId: '2024113283' },
    { name: '包鑫', studentId: '2024113284' },
    { name: '傅宇翔', studentId: '2024113285' },
    { name: '刘立瑾', studentId: '2024113286' },
    { name: '樊昊东', studentId: '2024113287' },
    { name: '廖友维', studentId: '2024113288' },
    { name: '傅煜', studentId: '2024113289' },
    { name: '王秋婕', studentId: '2024113290' },
    { name: '陈浩康', studentId: '2024113291' },
    { name: '王景', studentId: '2024113292' },
    { name: '马阳泰', studentId: '2024113293' },
    { name: '唐云杰', studentId: '2024113294' },
    { name: '牟峻琦', studentId: '2024113295' },
    { name: '王子奕', studentId: '2024113296' },
    { name: '杨环宇', studentId: '2024113297' },
    { name: '孙兆辰', studentId: '2024113298' },
    { name: '张浩鹏', studentId: '2024113299' },
    { name: '张恒瑞', studentId: '2024113300' },
    { name: '姚妍彤', studentId: '2024113301' },
    { name: '谭友梁', studentId: '2024113302' },
    { name: '丁恒祥', studentId: '2024113303' },
    { name: '陈俊林', studentId: '2024113304' },
    { name: '韩可儿', studentId: '2024113305' },
    { name: '何汶益', studentId: '2024113306' },
    { name: '李仁熠', studentId: '2024113307' },
    { name: '陈念', studentId: '2024113308' },
    { name: '马萱茹', studentId: '2024113309' },
    { name: '王鸣宇', studentId: '2024113310' },
    { name: '赵浩然', studentId: '2024113311' },
    { name: '张在行', studentId: '2024113312' },
    { name: '周俊杰', studentId: '2024113313' },
    { name: '李宗泽', studentId: '2024113314' }  
];
document.getElementById('submission-form').addEventListener('submit', function(event) {
    event.preventDefault();  // 阻止默认提交行为

    const name = document.getElementById('name').value;
    const studentId = document.getElementById('student-id').value;
    const student = roster.find(s => s.name === name && s.studentId === studentId);
    
    console.log(name, studentId, student);
    
    if (student) {
        const formData = new FormData(this); // 创建表单数据对象
        alert(`${studentId} ${name} 已提交！`);

        fetch('http://47.109.190.32:3000/uploads', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data; // 显示服务器返回的信息
        })
        .catch(error => {
            console.error('错误:', error);
        });
    } else {
        alert('没有找到匹配的姓名和学号。');
    }
});


function checkStatus(event) {
    event.preventDefault(); // 阻止默认表单提交

    const name = document.getElementById('check-name').value;
    const studentId = document.getElementById('check-student-id').value;

    // 检查姓名和学号是否在 roster 中
    const student = roster.find(student => student.name === name && student.studentId === studentId);
    if (!student) {
        alert('姓名或学号不匹配');
        return; // 退出函数，不发送请求
    }

    // 姓名和学号匹配，发送请求到后端
    fetch('http://47.109.190.32:3000/check-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId }), // 只发送学号
    })
    .then(response => response.json())
    .then(data => {
        if (data.files) {
            alert(`找到的文件: ${data.files.join(', ')}`);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('错误:', error);
        alert('发生错误，请稍后再试。');
    });
}