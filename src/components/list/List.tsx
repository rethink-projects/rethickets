import "./style.css";
import ImgList from "../imgList/ImgList"

type ListProps = {
     title: string;

};

function List({title,}:ListProps){
    return(

        <div className='list'>

            <div className='title-container'>

                <img className='calendarImg' src="./assets/calendar_white.png" alt="" />
                <h1 className='title'>
                    {title}
                </h1>
            </div>

            < ImgList/>

    </div>
            
    )
}

export default List;