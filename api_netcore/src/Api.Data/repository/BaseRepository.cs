using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data.Context;
using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.repository
{
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly MyContext _context;
        private DbSet<T> _dataset;
        public BaseRepository(MyContext context){
            _context = context;
            _dataset = _context.Set<T>();
        }
        Task<bool> IRepository<T>.DeleteAsync(Guid id){
            throw new NotImplementedException();
        }

        async Task<T> IRepository<T>.InsertAsync(T item) {
            try {
                 if(item.Id == Guid.Empty){
                     item.Id = Guid.NewGuid();
                 }
                 item.CreateAt = DateTime.UtcNow;
                 _dataset.Add(item);

                 await _context.SaveChangesAsync();
            }
            catch (Exception ex) {   
                throw ex;
            }
            return item;
        }

        Task<T> IRepository<T>.SelectAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<T>> IRepository<T>.SelectAsync()
        {
            throw new NotImplementedException();
        }

        async Task<T> IRepository<T>.UpdateAsync(T item) {
            try {
                 var result = await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(item.Id));
                 if (result == null){
                     return null;
                 }
                 item.UpdateAt = DateTime.UtcNow;
                 item.CreateAt = result.CreateAt;

                 _context.Entry(result).CurrentValues.SetValues(item);
                 await _context.SaveChangesAsync();
            }
            catch (Exception ex) {   
                throw ex;
            }
            return item;
        }
    }
}
