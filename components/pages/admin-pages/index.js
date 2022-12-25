import React from 'react';
import Sidebar from '../../side-bar';

function AdminPages() {
  return (
    <div>
         <Sidebar pageNav={[
            {
              name: "introduction",
              icon: "cake",
              title: "Představení",
              link: "#introduction"
            }
          ]} applicationNav={[
            { name: "introduction", icon: "cake", title: "Visual" },
          ]}/>
    </div>
  )
}

export default AdminPages