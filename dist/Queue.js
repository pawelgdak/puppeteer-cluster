"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.list = [];
        this.delayedItems = 0;
    }
    size() {
        return this.list.length + this.delayedItems;
    }
    push(item, options = {}) {
        if (options && options.delayUntil && options.delayUntil > Date.now()) {
            this.delayedItems += 1;
            setTimeout(() => {
                this.delayedItems -= 1;
                this.list.push(item);
            }, (options.delayUntil - Date.now()));
        }
        else {
            this.list.push(item);
        }
    }
    unshift(item, options = {}) {
        if (options && options.delayUntil && options.delayUntil > Date.now()) {
            this.delayedItems += 1;
            setTimeout(() => {
                this.delayedItems -= 1;
                this.list.push(item);
            }, (options.delayUntil - Date.now()));
        }
        else {
            this.list.unshift(item);
        }
    }
    // Care, this function might actually return undefined even though size() returns a value > 0
    // Reason is, that there might be delayedItems (checkout QueueOptions.delayUntil)
    shift() {
        return this.list.shift();
    }
}
exports.default = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxNQUFxQixLQUFLO0lBQTFCO1FBRVksU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBeUNyQyxDQUFDO0lBdkNVLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFPLEVBQUUsVUFBd0IsRUFBRTtRQUMzQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLFVBQVUsQ0FDTixHQUFHLEVBQUU7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFDRCxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ3BDLENBQUM7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQU8sRUFBRSxVQUF3QixFQUFFO1FBQzlDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUNOLEdBQUcsRUFBRTtnQkFDRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUNELENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDcEMsQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCw2RkFBNkY7SUFDN0YsaUZBQWlGO0lBQzFFLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBNUNELHdCQTRDQyJ9