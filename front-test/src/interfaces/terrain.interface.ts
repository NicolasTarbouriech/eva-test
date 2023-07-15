export interface Terrain {
  terrainId: number;
  availablePlaces: number;
  gameId: number | null;
  isPremium: boolean;
  isTerrainFree: boolean;
}
