import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, details, category, photo } = coffee;

  const handleDelete = (_id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              MySwal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter(
                (filCoffee) => filCoffee._id !== _id
              );
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="object-cover" />
        </figure>
        <div className="md:flex justify-between items-center w-3/4">
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{details}</p>
            <p>{category}</p>
          </div>
          <div className="card-actions flex md:grid justify-end items-center p-4">
            <button type="submit" className="btn btn-sm btn-primary w-full">
              View
            </button>
            <Link
              to={`/update-coffee/${_id}`}
              className="btn btn-sm btn-info w-full"
            >
              <button type="submit">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              type="submit"
              className="btn btn-sm bg-red-600 w-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
