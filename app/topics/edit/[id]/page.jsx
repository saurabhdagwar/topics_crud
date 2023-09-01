import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}

// export async function getStaticPaths() {
//   const myData = await fetch(`http://localhost:3000/api/topics`);
//   // const data = await myData.data;
//   console.log("Check dta", myData);
//   // const allPaths = await events_categories.map((ev) => {
//   //   return {
//   //     params: {
//   //       cat: ev.id.toString(),
//   //     },
//   //   };
//   // });
//   // console.log("allPaths", allPaths);
//   return {
//     paths: "",
//     fallback: false,
//   };
// }
