import "./style.css";
import ImgList from "../imgList/ImgList"

type ListProps = {
     ListText: string;

};

function List({ListText,}:ListProps){
    return(

        <div className='lists'>

            <div className='list-title'>

                <img className='calendarImg' src="./assets/calendar_white.png" alt="" />
                <h1 className='title-list'>
                    {ListText}
                </h1>
            </div>

            < ImgList/>

    </div>
            
    )
}

export default List;