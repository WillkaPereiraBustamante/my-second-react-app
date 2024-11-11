const Job = (props) => {
    // console.log(job);
  
    return (
        <>
            <div className={`${props.className} job`}>
                <h2>{props.title}</h2>
                <div>
                    <span>{props.contractType}</span> -
                    <span>{props.country}</span> -
                    <span>{props.city}</span>
                </div>
            </div>

        </>
      )
  };
  
  export default Job;
  