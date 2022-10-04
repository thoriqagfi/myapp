import { UserContext } from '../container/Home';

export default function TopBar() {

  return (
    <div className="bg-blue-400 text-center font-secondary py-5">
      <h1 className="text-3xl font-bold py-4">TopBar</h1>
      {/* Menggunakan consumer */}
      <UserContext.Consumer>
        {({name, email, id}) => (
          <>
            <p>ID : {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </>
        )}
      </UserContext.Consumer>
    </div>
  );
}