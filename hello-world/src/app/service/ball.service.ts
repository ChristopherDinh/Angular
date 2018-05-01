import {ball} from '../model/ball';
import {Injectable} from '@angular/core';

@Injectable()

export class BallService {
    ballList: ball[] = [];
    nextId: number = 1;
	// initialize method is a placeholder
    initializeList(): string {
        let b1: ball = new ball('red', 'large');
        let b2: ball = new ball('blue', 'medium');
        let b3: ball = new ball('green', 'small');
        console.log('adding b1:  '+this.add(b1));
        console.log('adding b1:  '+this.add(b2));
        console.log('adding b1:  '+this.add(b3));
        return('ballList initialized!');
    }
    add(ball: ball): string {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return 'sucess';
    }
    list(): ball[] {
        return this.ballList;
    }
    remove(id: number): string {
        let index: number = -1;
        for (let idx:number =0; idx < this.ballList.length; idx++) {
            if(id == this.ballList[idx].id){
            index = idx;
            break;
            }
        }
        this.ballList.splice(index,1);
        return 'Removed';
    }
	
    
}