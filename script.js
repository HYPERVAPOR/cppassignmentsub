document.getElementById('submission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // 提交作业的逻辑
    alert('作业已提交！');
});

document.getElementById('check-status-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // 查看提交情况的逻辑
    const name = document.getElementById('check-name').value;
    const studentId = document.getElementById('check-student-id').value;

    // 假设我们从服务器获取数据，并显示在status-result中
    document.getElementById('status-result').innerText = `${name} (${studentId}) 的提交情况：\n- 作业1：已提交，评分：90，备注：良好`;
});
