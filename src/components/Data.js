import React, { useEffect, useState } from 'react'

function GithubUser( {login, id, avatar} ) {
    return (
        <div>
            <h1>{login}</h1>
            <p>{id}</p>
            <img src={avatar} height={150} />
        </div>
    )
}


function Data() {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    fetch(`https://api.github.com/users/kishumittal01`)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
  }, []);
  
  if (data) 
    return (
        // <pre>{JSON.stringify(data, null, 2)}</pre>
        <GithubUser login={data.login} id={data.id} avatar={data.avatar_url} />
    )
    if(!data) return null;


    if (loading) return <h1>loading.....</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>

  
    return (<h1>DAta</h1>
  )
}

export default Data
