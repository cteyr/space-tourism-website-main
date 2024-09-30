import { configureStore } from '@reduxjs/toolkit'
import navegateHeaderReducer from '../feature/navegateSlice/navegateSliceHeader'
import destinationReducer from '../feature/destinationSlice/destinationSlice'
import crewReducer from '../feature/crewSlice/crewSlice'
import technologyReducer from '../feature/technology/technologiSlice'

export const store = configureStore ({
    reducer: {
        navegateHeader: navegateHeaderReducer,
        destination: destinationReducer,
        crew: crewReducer,
        technology: technologyReducer
    }
})