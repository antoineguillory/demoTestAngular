export class TotoService {
    toto(): string {
        for( let _i = 0; _i < 10000000; _i++) {} // Opération consommatrice
        return 'toto';
    }
}