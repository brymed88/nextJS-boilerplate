import { Hr, Img } from '@react-email/components'
export default function EmailHeaderTemplate() {
     return (
          <>
               <Img
                    src={`https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Pile_reversed_demo.svg/1200px-Pile_reversed_demo.svg.png`}
                    width="50"
                    alt="logo"
               />
               <Hr className="mt-4" />
          </>
     )
}
