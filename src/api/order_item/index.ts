import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';
import { useMutation } from '@tanstack/react-query';

export type InsertTables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert'];

export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(items: InsertTables<'order_items'>) {
      const { data: newOrderItem, error } = await supabase
        .from('order_items')
        .insert(items)
        .select();
      if (error) {
        throw new Error(error.message);
      }
      return newOrderItem;
    },
  });
};
