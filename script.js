document.getElementById('input-box').addEventListener('input', function() {
    var inputValue = this.value.trim();
    document.getElementById('submit').disabled = inputValue === '';
});

document.getElementById('submit').addEventListener('click', function() {
    if (this.disabled ) {
        alert('输入框内容不能为空！');
    }
});