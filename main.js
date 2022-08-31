function send(){
    var url = document.getElementById('url').value
    var user = document.getElementById('user').value
    var msg = document.getElementById('msg').value
    var icon = document.getElementById('icon').value

    if (url==''){
        alert('URLを入力してください')
    }else{
        if (msg==''){
            alert('メッセージを入力してください')
        }else{
            const a = { username: user, content: msg, avatar_url: icon};

            postData(url,a)
        
            function postData(url = ``, data = {}) {
                return fetch(url, {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(data),
                }).then((response) => response.text());
            }
        }
    }
}