const CardEditForm = (props) => {
  let { handleQChange,
    handleAChange,
    handleDelete,
    idx,
    question,
    answer
  } = this.props;

  return(
    <tr>
      <td>{idx + 1}</td>
      <td>
        <textarea value={question} onChange={handleQChange(idx)}/>
      </td>
      <td>
        <textarea value={answer} onChange={handleAChange(idx)}/>
      </td>
      <td>
        <a className='card-delete' href='#' onClick={handleDelete(idx)}>
          <i className="fa fa-times"></i>
        </a>
      </td>
    </tr>
  );
};

export default CardEditForm;
