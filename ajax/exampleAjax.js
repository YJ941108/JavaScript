var httpRequest;
document.getElementById("ajaxButton").addEventListener('click', makeRequest);

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert('XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ');
        return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://mocki.io/v1/d332a5cf-54b5-4481-872f-6f214c8b23bf');
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            const allText = httpRequest.responseText;
            document.getElementById("responseText").innerHTML = allText;
            alert("서버응답성공");
        } else {
        alert('request에 뭔가 문제가 있어요.');
        }
    }
};