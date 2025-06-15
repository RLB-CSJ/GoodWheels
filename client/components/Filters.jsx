export function Filters() {
  return (
    <div class="panel filters">
      <h1>Filters</h1>
      <form>
        <label htmlFor='location'>Location</label>
        <input id='location' name='location' type='text'></input>
        <label htmlFor='electric'>Electric</label>
        <input id='location' name='location' type='checkbox'></input>
        <label htmlFor='wheel'>Electric</label>
        <select id='wheel' name='wheel'>
          <option value='8'>8"</option>
          <option value='12'>12"</option>
          <option value='16'>16"</option>
          <option value='18'>18"</option>
        </select>
        <label htmlFor='frame'>Electric</label>
        <select id='frame' name='frame'>
          <option value='xs'>XS</option>
          <option value='s'>S</option>
          <option value='m'>M</option>
          <option value='l'>L</option>
          <option value='xl'>XL</option>
        </select>
        <label htmlFor='training'>Training Wheels</label>
        <input id='training' name='training' type='checkbox'></input>
        <label htmlFor='brakes'>Brakes</label>
        <select id='brakes' name='brakes'>
          <option value='coaster'>Coaster</option>
          <option value='disk'>Disk</option>
          <option value='rim'>Rim</option>
        </select>
        <input type='submit' value='Apply'></input>
      </form>
    </div>
  );
}
