import PropTypes from 'prop-types'

function MyComponent({name = "이름없음", age = 0, addr = "경기도"}) {
  
  return (
    <div>
      Hello world <br/>
      name : {name} <br/>
      age : {age} <br/>
      addr : {addr} <br/>
    </div>
  );
}

// 프롭스 기본값 지정
// MyComponent.defaultProps = {
//   name : "no name", 
//   age : 0,
//   addr : "none"
// }

// 프롭스 타입 검증 -> 실제 에러가 나는 것은 아니지만, 타입에 대한 힌트 준다.
// MyComponent.propTypes = {
//   name : PropTypes.string,
//   age : PropTypes.number,
//   addr : PropTypes.string
// }

export default MyComponent;