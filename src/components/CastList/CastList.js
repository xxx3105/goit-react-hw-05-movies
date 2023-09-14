// import Nores from 'images/Nores.png';

// export default function CastList({ movieCast }) {
//   const results = movieCast.map(item => {
//     const { id, profile_path, original_name, character } = item;

//     return (
//       <div key={id}>
//         <img
//           src={
//             profile_path
//               ? `https://image.tmdb.org/t/p/w500${profile_path}`
//               : Nores
//           }
//           alt={original_name}
//         />
//         <p>
//           <b>{original_name ? original_name : '...'}</b>
//         </p>
//         <p>{character ? character : '...'}</p>
//       </div>
//     );
//   });

//   return <div>{results}</div>;
// }
