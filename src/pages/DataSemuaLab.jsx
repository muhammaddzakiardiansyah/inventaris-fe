import { Fragment, useEffect, useState } from "react";
import Dashboard from "../layouts/Dashboard";
import axios from "axios";
import { Link } from "react-router-dom";

const DataSemuaLab = () => {
  const [dataLab, setDataLab] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/laboratories",
    })
      .then((res) => setDataLab(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.title = "Data Semua Lab";
  });

  const handleClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios({
            method: "DELETE",
            url: `http://localhost:4000/api/v1/laboratories/${id}`,
          });
          Swal.fire("Deleted!", res.data.response.message, "success");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (error) {
          Swal.fire("Failed!", error, "error");
        }
      }
    });
  };

  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Data Semua Lab
          </h2>
        </header>
        <div className="p-3">
          {loading ? (
            <Fragment>
              <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 my-3">
                <div className="flex items-center gap-4">
                  <span className="hidden rounded-xl bg-gray-300 p-2 sm:block h-10 w-10 animate-pulse"></span>
                  <div>
                    <p className="bg-gray-300 h-6 w-[20vw] animate-pulse"></p>
                  </div>
                </div>
                <div className="bg-gray-300 h-10 w-10 rounded-xl animate-pulse"></div>
              </article>
              <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 my-3">
                <div className="flex items-center gap-4">
                  <span className="hidden rounded-xl bg-gray-300 p-2 sm:block h-10 w-10 animate-pulse"></span>
                  <div>
                    <p className="bg-gray-300 h-6 w-[20vw] animate-pulse"></p>
                  </div>
                </div>
                <div className="bg-gray-300 h-10 w-10 rounded-xl animate-pulse"></div>
              </article>
              <article className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 my-3">
                <div className="flex items-center gap-4">
                  <span className="hidden rounded-xl bg-gray-300 p-2 sm:block h-10 w-10 animate-pulse"></span>
                  <div>
                    <p className="bg-gray-300 h-6 w-[20vw] animate-pulse"></p>
                  </div>
                </div>
                <div className="bg-gray-300 h-10 w-10 rounded-xl animate-pulse"></div>
              </article>
            </Fragment>
          ) : (
            dataLab.map((item) => {
              return (
                <article
                  className="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 my-3"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden rounded-xl bg-gray-100 p-2 text-gray-600 sm:block">
                      <ion-icon name="school-outline" size="large"></ion-icon>
                    </span>
                    <div>
                      <p className="text-2xl font-medium text-gray-900">
                        {item.laboratory_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <Link to={`/edit-lab/${item.id}`}>
                      <button className="bg-yellow-100 flex justify-center items-center py-1 px-3 rounded-full">
                        <ion-icon name="pencil-outline" size="small"></ion-icon>
                      </button>
                    </Link>
                    <button
                      className="bg-red-100 flex justify-center items-center py-1 px-3 rounded-full"
                      onClick={() => handleClick(item.id)}
                    >
                      <ion-icon name="trash-outline" size="small"></ion-icon>
                    </button>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default DataSemuaLab;
