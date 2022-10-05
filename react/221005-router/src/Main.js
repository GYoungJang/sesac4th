import {Link} from 'react-router-dom';
function Main() {
  return (
    <div>
      <h1>Main</h1>
      
      <Link to="/product/1">1번 상품</Link>
      <br />
      <Link to="/product/2">2번 상품</Link>
      <br />
      <Link to="/product/1?search=productName&q=demo#test">a번 상품</Link>
    </div>
  );
}

export default Main;
