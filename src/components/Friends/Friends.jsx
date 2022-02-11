import s from './Friends.module.css'
const Friend = (props) => {    
    return <div class='col-lg-10'>
        {
            props.friends.map(f =>
                <div className={s.allInfo}>
                    <img className={s.img} src={f.img} />
                    <div className={s.info}>
                        <div className={s.fullName}>{f.fullName}</div>
                        <div className={s.status}>Status:{f.status}</div>
                        <div className={s.locat}>{f.location.city} {f.location.country}</div>

                        {f.followed ? <button onClick={() => { props.followAC(f.id) }}>Follow</button> : <button onClick={() => { props.UnFollowAC(f.id) }}>Unfollow</button>}
                    </div>
                </div>
            )
        }
    </div>
};

export default Friend;