export function CourseCard({ details }) {
    return (
        <div className="col-4">
            <div className="card w-100" style={{ width: "18rem" }}>
                <img style={{ height: "250px" }} src={details.image} referrerpolicy="no-referrer" className="card-img-top object-fit-fill" alt="..." />
                <div className="card-body" style={{ height: "150px" }}>
                    <h5 className="card-title">{details.title}</h5>
                    <p className="card-text" style={{ fontWeight: "lighter" }}>{details.description}</p>
                </div>
                <div className="card-footer border-top-0">
                    <p className="mb-0" style={{ fontWeight: "lighter" }}>{details.date} - No Comments</p>
                </div>
            </div>
        </div>
    );
}