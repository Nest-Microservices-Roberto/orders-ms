import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enums/order.enum';
import { OrderStatus } from '@prisma/client';

export class ChangeOrdersStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
