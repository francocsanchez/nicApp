import moment from "moment";

export const HistoryDetails = ({ history }) => {
  return (
    <div className="my-3 p-3 bg-light rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0">HISTORIAL</h6>
      {history?.reverse().map((h, i) => {
        return (
          <div className="d-flex text-muted pt-3" key={i}>
            <svg
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
            >
              <rect width="100%" height="100%" fill="#c95555"></rect>
              <text x="20%" y="50%" fill="#eee" dy=".3em">
                {h.user?.name === undefined
                  ? 'AD'
                  : `${h.user?.name.charAt(0)}${h.user?.lastname.charAt(0)}`}
              </text>
            </svg>
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">
                  {h.user?.name === undefined
                    ? "Admin"
                    : `${h.user?.name} ${h.user?.lastname}`}
                </strong>
              </div>
              <span className="d-block">{h.details}</span>
              {}
              <span className="d-block text-end">
                {moment(h.date).format("MMMM Do YYYY, h:mm a")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
