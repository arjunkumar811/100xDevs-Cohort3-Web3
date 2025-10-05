import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})



function App() {

async function getBalance() {
const res = await client.getBalance("");
console.log(res);
}

  return (
    <>
   
  <button onClick={getBalance}>Get Balance</button>
    </>
  )
}

export default App
