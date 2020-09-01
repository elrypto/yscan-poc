import useEthAccount from '../components/hooks/useEthAccount';

const Index = () => {
  const currentAddress = useEthAccount();

  console.log('current addresss:', currentAddress);

  return (
    <div className="flex">
      <Left currentAddr={currentAddress} />
      <Main />
    </div>
  )
}
export default Index;



const Main = () => (
  <div className="p-2">
    main
  </div>
)




const Left = ({ currentAddr }: { currentAddr: string }) => (
  <div className="w-64 p-2">
    <div className="flex flex-col items-center space-y-2">
      <img className="w-10" alt="logo" src='yearn-logo.png' />
      <div className="text-sm text-cool-gray-400">
        {addrDisplay(currentAddr)}
      </div>
    </div>

  </div>
)


const addrDisplay = (addr: string) => {
  if (addr && addr.length > 0) {
    return `${addr.slice(0, 4)}...${addr.slice(addr.length - 3, addr.length)}`
  }
}