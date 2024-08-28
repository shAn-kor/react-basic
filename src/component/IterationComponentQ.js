import { useState } from "react";
import  img1  from "../img/img1.png";
import img2  from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
/*
이미지를 가져오는 방법
1. 외부 서버에서 경로 참조 받기 (가장 일반적인 방법)

2. src밑으로 넣는경우 (img1 으로 하나의 이미지 참조가능)
import img1 from '../img/1.jpg'; 

3. public밑으로 넣는경우는 바로 참조할 수 있습니다.
*/
const IterationComponentQ = () => {

    //데이터 - public폴더밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        {src : img1, title : '아이폰10', price: 1000},
        {src : img2, title : '아이폰11', price: 2000},
        {src : img3, title : '아이폰12', price: 3000},
        {src : img4, title : '아이폰13', price: 4000},
    ]
    let [img, setImg] = useState(img1);
    let [list, setList] = useState(arr);

    const newList = list.map((value, index) => 
        { return <div key={index} onClick={() => setImg(value.src)}>
                <img src={value.src} width="100" />
                <p>
                    상품 : {value.title}
                </p>
                <p>
                    가격{value.price}원
                </p>
        </div>}
    );
    

    return (
        <>
            <hr/>
            <h3>이미지 데이터 반복해보기</h3>
            <img src={img} alt="봄" width="100" />
            <div style={{display: "flex", justifyContent : "space-around"}}>{newList}</div>
        </>
    );

}

export default IterationComponentQ;