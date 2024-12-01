import { Observable } from 'rxjs';
export function demo(){
        let myObservableObj = new Observable((observer)=>{
            // we are emitting the values
            observer.next('Hello');
            observer.next('World');
            observer.next('!');
            observer.complete();
        });

        myObservableObj.subscribe({
            next: (value)=>console.log(value),
            error: (error)=>console.log(error),
            complete: ()=>console.log('Completed')
        });
}