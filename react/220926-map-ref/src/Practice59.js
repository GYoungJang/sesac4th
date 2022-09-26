import React, {useState} from 'react';

export default function Practice59() {
    const [list, setList] = useState([]);
    const [results, setResult] = useState([]);

    function writeList() {
        let form = document.getElementById('form_writer');
        let newList = {
            writer : form.writer.value,
            title : form.title.value,
        };

        setList([...list, newList])

    }

    function searchList() {
        let form = document.getElementById('form_search');
        let newList = list.filter((result) => {
            return result[form.type.value].includes(form.search.value);
        });
        setResult(newList);

    }

    return (
        <div>
            <form id="form_writer">
                <input type='text' name='writer' placeholder='작성자'></input>
                <input type='text' name='title' placeholder='제목'></input>
                <button type="button" onClick={writeList}>작성</button>
            </form>
            <form id="form_search">
                <select name='type'>
                    <option value='writer'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input type='text' name='search' placeholder='검색어'></input>
                <button type="button" onClick={searchList}>검색</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i)=> {
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h4>검색 결과</h4>
            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((value, i)=> {
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}