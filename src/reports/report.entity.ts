import { User } from 'src/users/user.entity';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;
}
