import profInf from './ProfileInfo.module.css'
const ProfInfo = () => {
    return (
        <div>
            <div className='img__content'>
                <img className={profInf.beachImg} src='https://smapse.ru/storage/2018/03/academy-img-1.jpg'></img>
            </div>

            <div className={profInf.text}>
                ContentProfile + ava
            </div>
        </div>
    );
}

export default ProfInfo;