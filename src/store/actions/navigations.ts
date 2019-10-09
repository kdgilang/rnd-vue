import { ActionTree } from 'vuex';
import { SET_NAVIGATIONS } from '../types';
import navmodel from '../models/navigation';
import rootmodel from '../models/models';
import {getNavigations} from '@/services/navigation';

export const navigations: ActionTree<rootmodel, rootmodel> = {
    [SET_NAVIGATIONS]: ({commit}) => {
        getNavigations().then((res: navmodel[]) => {
            const payload: navmodel[] = res;
            commit(SET_NAVIGATIONS, res);
        });
    },
};
