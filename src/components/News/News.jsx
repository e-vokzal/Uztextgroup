import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchService } from '../../Services/FetchService';
import Loader from '../Loader/loader';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);
    return (
      <div className='news' id='news'>
        <Loader
        actionCallback={new Promise((res, rej) => {
            FetchService
            .GetAsync(`/${localStorage.getItem("lang") ?? "uz"}/api/news?size=3&page=1`)
            .then(res)
            .catch(rej);
        })}
        isBackground ={false}
        setResultCallback={setNews}
        />
            <div className="container">
                <div className="news-top">
                    <span className='news-title'>Yangiliklar</span>
                    <Link to="/news" className='all-article'>Barcha maqolalarni ko'rish</Link>
                </div>
            </div>
        <div className="news-card">
            <div className="container">
                <div className="news-cards">
                    <div className="card-item">
                        <a href="#1">
                            <img src="./images/news1.jpg" alt="" />
                            <div className='news-content'>
                                <div className="news-footer">
                                    <span className="news-category">Yangiliklar</span>
                                    <span className="news-date">07.12.2022</span>
                                </div>
                                <span className="post-title">
                                    3 dekabr – Xalqaro nogironlar kuni munosabati bilan Nurafshon shahridagi "Yoshlar markazi"da hayriya forumi bo'lib o'tdi.
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="card-item">
                        <a href="#1">
                            <img src="./images/news2.jpeg" alt="" />
                            <div className='news-content'>
                                <div className="news-footer">
                                    <span className="news-category">Yangiliklar</span>
                                    <span className="news-date">03.05.2022</span>
                                </div>
                                <span className="post-title">
                                    Eid Hayit
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="card-item">
                        <a href="#1">
                            <img src="./images/news3.jpg" alt="" />
                            <div className='news-content'>
                                <div className="news-footer">
                                    <span className="news-category">Yangiliklar</span>
                                    <span className="news-date">21.03.2022</span>
                                </div>
                                <span className="post-title">
                                    Navro'z Muborak Bo'lsin!
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default News;