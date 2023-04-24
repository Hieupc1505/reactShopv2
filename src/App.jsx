import { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/userAuth/userAction";

function App() {
    const [count, setCount] = useState([]);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const loginUser = async () => {
        dispatch(fetchUser());
    };

    const handleClick = async (str) => {
        const data = await (await fetch(str)).json();
        setCount(data.lists);
    };
    const styleBtn = {
        minWidth: "150px",
        height: "auto",
        padding: "20px 15px",
        color: "white",
        backgroundColor: "cyan",
    };
    return (
        <div className="App">
            <button
                className="btn btn-primry"
                style={styleBtn}
                onClick={() => handleClick("/api/v1/lists")}
            >
                Nhập V1
            </button>
            <p></p>
            <button
                className="btn btn-primry"
                style={{ ...styleBtn, margin: "20px" }}
                onClick={() => loginUser()}
            >
                Nhập v2
            </button>
            {!!count.length &&
                count.map(({ name, age }, index) => {
                    return (
                        <p key={index} className={index}>
                            {name}-{age}
                        </p>
                    );
                })}
            {user?.username && <div>{user?.username}</div>}
        </div>
    );
}

export default App;
