import { Section } from './styles'
interface CardItemProps {
    item: {
        id: number;
        title: string;
        body: string;
        image: string;
      }
}


  
export function Card(props: CardItemProps) {
    return (
        
        <Section layout={props.item.id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>
                    {props.item.title}
                </h2>
                <p>
                    {props.item.body}
                </p>
            </div>

            <div>
                <img src={`./images/${props.item.image}`} alt="" />
            </div>
        </Section>
    )
}