import Profile from "profile/Profile";
import user from 'profile/user.json';
import Statistics from "statistics/Statistics";
import data from 'statistics/data.json';
import FriendList from "friendlist/FriendList";
import friends from 'friendlist/friends.json';
import TransactionHistory from "transaction/TransactionHistory ";
import transactions from 'transaction/transactions.json';


export default function App() {
  return (<div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}  
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;   
   </div>    
)
}




