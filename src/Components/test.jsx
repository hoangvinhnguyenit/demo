export default function Test() {
    const sp = [
    { id: 1, ten: "sp1", hinh: "1.jpg", mota: "mô tả 0123456", gia: 1000 },
    { id: 2, ten: "sp2", hinh: "2.jpg", mota: "mô tả 0123456", gia: 2000 },
    { id: 3, ten: "sp3", hinh: "3.jpg", mota: "mô tả 0123456", gia: 3000 },
    { id: 4, ten: "sp4", hinh: "4.jpg", mota: "mô tả 0123456", gia: 4000 },
  ];

    return(
        <div className="row">  {/* bọc trong .container dùng BS5*/}
            {sp.map((item,index) => (
                <div className="col-md-3" key={index}>
                    <div className="card">
                        <img alt="Card image" className="card-img-top" src={`img/${item.hinh}`} />
                        <div className="card-body">
                            <h4 className="card-title">{item.ten}-{index}</h4>
                            <p className="card-text">{item.mota}</p>
                            <h4 className="card-title">{item.gia}</h4>
                            <a className="btn btn-primary">
                            See Profile
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
        
    )
}


