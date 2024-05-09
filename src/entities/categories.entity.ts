import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from './products.entity';

@Entity({
  name: 'CATEGORIES',
})
export class Categories {
  /**
   * Autogenerated UUID.
   * @example '15707987-2981-4dd6-a99b-443caea1d6bd'
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Category must be a unique and not null string and have a maximum of 50 characters.
   * @example 'Keyboard'
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => Products, (product) => product.category)
  @JoinColumn()
  products: Products[];
}
