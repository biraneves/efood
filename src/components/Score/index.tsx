import { ScoreContainer } from './styles';

type Props = {
    score: number;
};

const Score = ({ score }: Props) => (
    <ScoreContainer>
        {score} <span className="fa-solid fa-star"></span>
    </ScoreContainer>
);

export default Score;
