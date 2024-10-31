import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "order",
})
export class OrderPipe implements PipeTransform {
  transform(order: number): string {
    if (!order) return "";

    if (order < 10) return `Nr. 000${order}`;

    if (order < 100) return `Nr. 00${order}`;

    if (order < 1000) return `Nr. 0${order}`;

    return `Nr. ${order}`;
  }
}
