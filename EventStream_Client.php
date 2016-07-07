<?php
/**
 * @author QTI3E
 * @license MIT
 */

/**
 * Class EventStream_Client
 * Very simple client model you can also write your
 * owns but it must has get_sessionId function!
 */
class EventStream_Client{
	/**
	 * User's specific id also it's client's session id
	 * @var string
	 */
	private $sessionId;

	/**
	 * EventStream_Client constructor.
	 *
	 * @param string $sessionId
	 */
	public function __construct($sessionId) {
		$this->sessionId = $sessionId;
	}

	/**
	 * @return string
	 */
	public function get_sessionId(){
		return $this->sessionId;
	}
}