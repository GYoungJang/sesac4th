export default function Event() {
    function clickEvent(e) {
        console.log(e);
    }
    function aClick(e) {
        e.preventDefault(); // 기본 동작 방지 기능
        console.log('aClick');
        console.log(e);
    }
    return(
        <div>
            <a href='#' onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}