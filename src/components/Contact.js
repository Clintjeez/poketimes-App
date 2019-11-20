import React from 'react'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/About')
  }, 2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Tenetur, quae illum dolores voluptate quam commodi id aperiam laudantium,
        ducimus doloremque consequuntur accusamus, ipsa alias quod reprehenderit
        minima molestias sapiente ex!</p>
    </div>
  )
}

export default Contact 