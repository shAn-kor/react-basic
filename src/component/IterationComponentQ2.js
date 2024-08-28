import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    let [selectList, setSelect] = useState(select);
    let newSelectList = selectList.map((data, index) => <option key={index}>{data}</option>);

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    let [dataList, setDataLit] = useState(data);

    let [newDataList, setNewDataList] = useState(liList(dataList));

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    let handleSel = (event) => {
        setNewDataList(liList(dataList.filter((data) => {return data.type === event.target.value})));
    }

    function liList(list) {
        return list.map((data) => <li key={data.id}>{data.type}-{data.teacher}</li>);
    }
	
	//4- input값은 state로 관리합니다.
    let [search, setSearch] = useState('');

    let handleSearch = (event) => {
        setSearch(event.target.value);
    }
	
	//5 - 검색기능 - 원본 data에서 필터링으로 검색값을 찾아 state를 업데이트 합니다.
    let handleBtn = () => {
        if (search === '') {
            setNewDataList(liList(dataList));
        }

        else {
            let target = search.toLocaleLowerCase();
            setNewDataList(liList(dataList.filter((data) => {return data.type.toLocaleLowerCase().includes(target) || data.teacher.toLocaleLowerCase().includes(target)})));
        }
    }

    return (
        <div>
			<hr/>
            <h3>실습</h3>
            Search: <input type="text" value={search} onChange={handleSearch}/>
            <button onClick={handleBtn}>검색</button>

            <br/>
            
			과목찾기:
            <select onChange={handleSel}>
                {newSelectList}
            </select>
            <ul>
                {newDataList}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;